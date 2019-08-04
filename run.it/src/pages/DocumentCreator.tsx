import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';

const DocumentCreator: React.FunctionComponent = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>DocumentCreator Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard class="welcome-card">
                    <img src="/assets/shapes.svg" alt="" />
                    <IonCardHeader>
                        <IonCardSubtitle>An message from mr. kode</IonCardSubtitle>
                        <IonCardTitle>Some thoughts about Ionic</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Things look pretty good and is easy to mock if we use the ionic-components.
            </p>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </>
    );
}

export default DocumentCreator;