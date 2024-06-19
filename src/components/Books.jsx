// Books.js
import React from 'react';
import Book from './Book'; // Book კომპონენტის იმპორტი
import Harrypotterimg from '../assets/harrypotter.jpg';
import jinsebisTaoba from '../assets/jinsebis-taoba.jpg';
import cnobiliXuteuli from '../assets/cnobili-xuteuli.jpg';
import mzeMtvare from '../assets/mze-mtvare-da-puris-yana.jpg';
import wripaBiwi from '../assets/wripa-biwi.jpg';

// Books კომპონენტი წარმოადგენს წიგნების სიას
const Books = () => {
    return (
        <div>
            {/* Book კომპონენტის გამოძახება სხვადასხვა გამოსახულებებისთვის */}
            <Book image={Harrypotterimg} />
            <Book image={jinsebisTaoba} />
            <Book image={cnobiliXuteuli} />
            <Book image={mzeMtvare} />
            <Book image={wripaBiwi} />
        </div>
    );
}

export default Books;