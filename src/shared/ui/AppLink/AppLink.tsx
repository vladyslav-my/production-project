import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string,
    children: ReactNode
}

export const AppLink: FC<AppLinkProps> = ({ className, children, to, ...otherProps }) => {
    return (
        <Link to={to} 
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}>
            { children }
        </Link>
    )
}