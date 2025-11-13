import React from 'react';
import Banner from '../../components/Banner/Banner';
import Overview from './Overview';
import BudgetingTips from './BudgetingTips';
import FinancialPlanningMatters from './FinancialPlanning';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <BudgetingTips></BudgetingTips>
            <FinancialPlanningMatters></FinancialPlanningMatters>
        </div>
    );
};

export default Home;