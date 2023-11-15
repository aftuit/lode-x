import React from 'react';
import FilerobotImageEditor, {
    TABS,
    TOOLS,
} from 'react-filerobot-image-editor';

export const ImageEditor = ({image}) => {


    const saveImg = ({ fullName, imageBase64 }) => {
        let tmpLink = document.createElement('a');
        tmpLink.href = imageBase64
        tmpLink.download = fullName
        tmpLink.style = 'position: absolute; z-index: -111; visibility: none;';
        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
        tmpLink = null;
    }

    return (
        <div>
            <FilerobotImageEditor
                source={image}
                onSave={(editedImageObject, designState) => {
                    console.log('saved', editedImageObject, designState)
                    saveImg(editedImageObject);
                }
                }
                annotationsCommon={{
                    fill: '#ff0000',
                }}
                Text={{ text: 'Text here ...' }}
                Rotate={{ angle: 90, componentType: 'slider' }}
                Crop={{
                    presetsItems: [
                        {
                            titleKey: 'classicTv',
                            descriptionKey: '4:3',
                            ratio: 4 / 3,
                            // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
                        },
                        {
                            titleKey: 'cinemascope',
                            descriptionKey: '21:9',
                            ratio: 21 / 9,
                            // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
                        },
                    ],
                    presetsFolders: [
                        {
                            titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                            // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                            groups: [
                                {
                                    titleKey: 'facebook',
                                    items: [
                                        {
                                            titleKey: 'profile',
                                            width: 180,
                                            height: 180,
                                            descriptionKey: 'fbProfileSize',
                                        },
                                        {
                                            titleKey: 'coverPhoto',
                                            width: 820,
                                            height: 312,
                                            descriptionKey: 'fbCoverPhotoSize',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                }}
                tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK, TABS.PEN, TABS.FILTERS, TABS.FINETUNE]} // or {['Adjust', 'Annotate', 'Watermark']}
                defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                defaultToolId={TOOLS.TEXT} // or 'Text'
            />
        </div>
    );
}