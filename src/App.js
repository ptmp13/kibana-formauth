import logo from './logo.svg';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import {
  EuiText,
  EuiProvider,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageTemplate,
  EuiIcon,
  EuiTextColor,
  DisplayToggles,
  EuiSwitch,
  EuiFieldPassword,
  EuiPanel,
  EuiSpacer,
  EuiFieldText,
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiTextAlign,
  EuiPageHeader
} from '@elastic/eui';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dual, setDual] = useState(true);

  return (
    <EuiProvider colorMode="light">
      <EuiPageTemplate>
        <EuiSpacer size="xxl"></EuiSpacer>
        {/* <EuiPanel paddingSize="m" borderRadius="none" borderRadius="m" hasBorder={false} hasShadow={false}> */}
        <EuiText>
          <EuiTextAlign textAlign="center">
            <EuiIcon type="logoElastic" size="xxl" />
            <EuiSpacer size="xxl"></EuiSpacer>
            <EuiTitle size="xxl" class="login-form" textAlign="center">
              <h1>Welcome to Applogs</h1>
            </EuiTitle>
          </EuiTextAlign>
        </EuiText>
        <EuiSpacer size="l" />
        {/* <EuiTextColor color="subdued">
              support email: WeblogicAdmin@sportmaster.ru
            </EuiTextColor> */}
        {/* </EuiPanel> */}
        {/* <EuiPanel paddingSize="m" hasBorder={true}> */}
        <EuiFlexGroup alignItems="center" class="login-form" justifyContent="flexStart">
          <EuiFlexItem>
            <EuiPanel paddingSize="l" borderRadius="m" hasBorder={false} hasShadow={true}>
              <EuiForm method="POST" component="form">
                <EuiFormRow label="Username" helpText="Windows Domain login">
                  <EuiFieldText
                    name="httpd_username"
                    value={username}
                    onChange={(u) => setUsername(u.target.value)}
                  />
                </EuiFormRow>
                <EuiSpacer size="m" />
                <EuiFormRow label="Password">
                  <EuiFieldPassword
                    type="dual"
                    value={password}
                    name="httpd_password"
                    onChange={(p) => setPassword(p.target.value)}
                  />
                </EuiFormRow>
                <EuiSpacer size="l" />
                <EuiButton type="submit" name="login" fill={true}>
                  Login
                </EuiButton>              
              </EuiForm>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton
              color="primary"
              fill={false}
              size="m"
            >
              Get more Privs
            </EuiButton>              
          </EuiFlexItem>
        </EuiFlexGroup>
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
            <EuiSpacer size="xxl" />
      </EuiPageTemplate>
    </EuiProvider>
  );
}

export default App;
