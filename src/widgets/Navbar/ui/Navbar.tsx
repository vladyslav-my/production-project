import { FC } from 'react';
import cls from './Navbar.module.scss';

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={"/"}>Главная</AppLink>
            <AppLink to={"/about"}>О сайте</AppLink>
        </div>     
    </div>
  )
}
