import classNames from 'classnames';

interface HeaderProps {
    showMenu: () => void;
    menuActive: boolean;
}

export function MenuHamburguer({ showMenu, menuActive }: HeaderProps) {
    return (
        <div onClick={showMenu} className={classNames('transition-all cursor-pointer', {
            'delay-[0.5s] rotate-45': menuActive,
            'delay-[.4s]': !menuActive
        })}>

            <span
                className={classNames('block w-[28px] h-[2px] rounded-full bg-green-500 transition-all mb-[7px]', {
                    'delay-200 translate-y-[9px]': menuActive,
                    'delay-[.4s]': !menuActive
                })}
            >

            </span>
            <span
                className={classNames('block h-[2px] rounded-full bg-green-500 transition-all mb-[7px]', {
                    'w-0': menuActive,
                    'w-[28px] delay-[.4s]': !menuActive
                })}
            >

            </span>
            <span
                className={classNames('block w-[28px] h-[2px] rounded-full bg-green-500 transition-all', {
                    'delay-200 translate-y-[-9px] rotate-90': menuActive,
                    'delay-[.4s]': !menuActive
                })}
            >

            </span>
        </div>
    )
}