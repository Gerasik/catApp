import React from 'react';
import BalanceProvider from './components/BalanceProvider';
import BoostersProvider from './components/BoostersProvider';
import EnergyProvider from './components/EnergyProvider';
import SmartphoneWindow from './SmartphoneWindow';

const App: React.FC = () => {
  return (
    <BalanceProvider>
      <BoostersProvider>
        <EnergyProvider>
          <SmartphoneWindow currentUsername="User" />
        </EnergyProvider>
      </BoostersProvider>
    </BalanceProvider>
  );
};

export default App;
