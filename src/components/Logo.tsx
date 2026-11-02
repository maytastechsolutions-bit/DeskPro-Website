import { useNav } from '@/lib/nav-context';

export function Logo({ onClick }: { onClick?: () => void }) {
  const { navigate } = useNav();

  return (
    <button
      onClick={() => (onClick ? onClick() : navigate('home'))}
      className="group flex items-center"
      aria-label="DeskPro home"
    >
      <img
        src="/deskpro.png"
        alt="DeskPro appliance care made simple"
        className="h-12 w-auto max-w-[180px] object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:h-14 sm:max-w-[210px]"
      />
    </button>
  );
}
