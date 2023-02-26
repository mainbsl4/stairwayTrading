import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import '../../../assets/css/productZoomStyle.css';

import image1 from '../../../assets/backgroundImage/Company.png';

export default class ModulabSBM extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify className='ImgMag' {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image1
                        },
                        largeImage: {
                            src: image1,
                            width: 2000,
                            height: 750
                        },
                        shouldUsePositiveSpaceLens: true
                    }} />
                </div>
            </div>
        );
    }
}