import { FC } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            MainPage
        </div>
    )
}

export default MainPage;