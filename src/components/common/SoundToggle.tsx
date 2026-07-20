import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks';
import { Button } from '@/components/ui/button';

/** Toggles UI sound effects (off by default). */
export function SoundToggle({ className }: { className?: string }) {
  const { enabled, toggle } = useSound();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={enabled ? 'Mute sound effects' : 'Enable sound effects'}
      aria-pressed={enabled}
      className={className}
    >
      {enabled ? <Volume2 /> : <VolumeX />}
    </Button>
  );
}
