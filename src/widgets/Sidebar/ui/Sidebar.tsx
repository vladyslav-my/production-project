import { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setColappsed] = useState(false);

    const onToggle = () => {
        setColappsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
           
            <div className={cls.switchers}>
                <button onClick={onToggle}>Toggle</button>
                <ThemeSwitcher className='' />
            </div>
        </div>
    )
}