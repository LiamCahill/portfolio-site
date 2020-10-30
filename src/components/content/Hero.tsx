import React, { Fragment } from 'react'
import { IHero } from '../../types/ContentTypes';

export const HeroTemplate = ({ data }: { data: IHero }) => {
    return (
        <Fragment>
            <div>
                {'<--Start Hero-->'}
                <h1>
                    {data.title}
                </h1>
                <h3>
                    {data.subtitle}
                </h3>
                <h4>{data.description}</h4>
                {'<--End Hero-->'}
            </div>
        </Fragment>
    )
}

export const Hero = ({ data }: { data: IHero | null }) => {
    if (!data) {
        return null;
    }
    return <HeroTemplate data={data} />;
};