import React, { Fragment } from 'react'
import { IHero } from '../../types/HeroTypes';

export const HeroTemplate = ({ data }: { data: IHero }) => {
    return (
        <Fragment>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">

                                    <div
                                        style={{
                                            display: 'flex',
                                            height: '150px',
                                            lineHeight: '1',
                                            justifyContent: 'space-around',
                                            alignItems: 'left',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <h1 className="has-text-weight-bold is-size-5-mobile is-size-2-tablet is-size-1-widescreen">
                                            {data.title}
                                        </h1>
                                        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen" >
                                            {data.subtitle}
                                        </h3>
                                    </div>

                                    <div className="tile">
                                        <h4 className="subtitle">{data.description}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export const Hero = ({ data }: { data: IHero | null }) => {
    if (!data) {
        return null;
    }
    return <HeroTemplate data={data} />;
};