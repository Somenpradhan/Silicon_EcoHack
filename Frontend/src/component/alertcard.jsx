import React from 'react';
import { Clock, AlertTriangle, Info, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StatusBadge } from './StatusBadge';
import { useTimeAgo } from './useTimeAgo';

// Configuration for severity styles and icons
const SEVERITY_THEMES = {
  critical: {
    icon: XCircle,
    iconClass: "text-red-500",
    cardClass: "border-red-500/30 bg-red-500/5",
    accentBar: "border-l-red-500"
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "text-amber-500",
    cardClass: "border-amber-500/30 bg-amber-500/5",
    accentBar: "border-l-amber-500"
  },
  info: {
    icon: Info,
    iconClass: "text-blue-500",
    cardClass: "border-blue-500/30 bg-blue-500/5",
    accentBar: "border-l-blue-500"
  }
};

export function AlertCard({ alert, onDismiss, onAction }) {
  const timeAgo = useTimeAgo(alert?.timestamp);
  
  // Fallback to 'info' theme if severity is missing
  const theme = SEVERITY_THEMES[alert?.severity] || SEVERITY_THEMES.info;
  const Icon = theme.icon;

  return (
    <Card className={cn(
      'p-4 transition-all duration-200 hover:shadow-md border-l-4',
      theme.cardClass,
      theme.accentBar
    )}>
      <div className="flex items-start gap-4">
        {/* Visual Icon with subtle background wrapper */}
        <div className={cn("mt-1 p-1.5 rounded-full bg-white/50 dark:bg-black/20", theme.iconClass)}>
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              {/* Header: Title and Badge */}
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 italic tracking-tight">
                  {alert.title}
                </h4>
                <StatusBadge status={alert.severity} />
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                {alert.description}
              </p>

              {/* Action Required Callout */}
              {alert.actionRequired && (
                <div className="flex items-center gap-2 py-1 px-2 rounded bg-primary/10 w-fit mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <p className="text-xs text-primary font-bold">
                    Action: {alert.actionRequired}
                  </p>
                </div>
              )}

              {/* Metadata Footer */}
              <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {timeAgo}
                </span>
                {alert.trainsetId && (
                  <span>
                    Unit: <span className="text-slate-900 dark:text-slate-200 font-bold">{alert.trainsetId}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {(onAction || onDismiss) && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
              {onAction && (
                <Button
                  size="sm"
                  variant="default"
                  className="h-8 text-xs font-bold px-4 shadow-sm"
                  onClick={onAction}
                >
                  Resolve Now
                </Button>
              )}
              {onDismiss && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 text-xs font-semibold text-slate-500 hover:text-slate-900"
                  onClick={onDismiss}
                >
                  Dismiss
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}