import React from 'react'
import s from './css/SalaryPlate.module.scss'


const SalaryPlate = () => {
    return (
        <aside className={s.salary}>
            <p className={s['salary__trafficlight']}>Готов выполнить тестовое задание</p>
            <p className={s['salary__move']}>Готов к переезду</p>
            <p className={s['salary__text']}>Рассчитываю на оклад</p>
            <p className={s['salary__text-big']}>
                от&nbsp;
                <span className={s['salary__text-big--bigger']}>40 000&nbsp;</span>
                до&nbsp;
                <span className={s['salary__text-big--bigger']}>70 000&nbsp;</span>
                руб./месяц
            </p>
        </aside>
    )
}

export default SalaryPlate