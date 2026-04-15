import React from 'react';
import { AccessibilityProvider } from '../contexts/AccessibilityContext';
import AIChatBot from './AIChatBot';

const AccessibilityProviderWrapper: React.FC = () => {
  return (
    <AccessibilityProvider>
      <AIChatBot />
    </AccessibilityProvider>
  );
};

export default AccessibilityProviderWrapper;