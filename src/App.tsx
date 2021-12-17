import React from 'react';
import './styles.scss';
import {Card} from 'antd';
import PetCard from "./components/PetCard";
const App: React.FC = () => {
    return (
        <div className="wrapper">
            <PetCard />
        </div>
    );
};
export default App;
