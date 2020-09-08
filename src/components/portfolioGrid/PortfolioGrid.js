import React from 'react'
import s from './css/PortfolioGrid.module.scss'

function PortfolioGrid({children}) {

    const leftContent = children[0] || children
    const rightContent = children[1]

    return (
        <section className={s.section}>
            <div className={s['section__left']}>
                {leftContent}
            </div>
            <div className={s['section__right']}>
                {rightContent}
            </div>
        </section>
    )
}

export default PortfolioGrid