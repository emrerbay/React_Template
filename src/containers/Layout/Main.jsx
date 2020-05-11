import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import * as router from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import {
  Notification,
  NotificationGroup,
} from '@progress/kendo-react-notification'
import { Fade } from '@progress/kendo-react-animation'

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react'

import Footer from './Footer'
import Header from './Header'

// sidebar nav config
import navigation from '~/_nav'
// routes config
import routes from '~/routes'

import { clearError, clearSuccess } from '~/redux/slices/globalSlice'

const SNotificationGroup = styled(NotificationGroup)`
  align-items: flex-start;
  flex-wrap: wrap;
  bottom: 0px;
  right: 0px;
`

const Main = (props) => {
  const dispatch = useDispatch()
  const { error, success } = useSelector((state) => state.global)

  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading}>
          <Header />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routes} router={router} />
          <Container fluid>
            <Suspense fallback={loading}>
              <SNotificationGroup>
                <Fade enter={true} exit={true}>
                  {error && (
                    <Notification
                      type={{ style: 'error', icon: true }}
                      closable={true}
                      onClose={() => dispatch(clearError())}
                    >
                      <span>{error}</span>
                    </Notification>
                  )}
                </Fade>
                <Fade enter={true} exit={true}>
                  {success && (
                    <Notification
                      type={{ style: 'success', icon: true }}
                      closable={true}
                      onClose={() => dispatch(clearSuccess())}
                    >
                      <span>{success}</span>
                    </Notification>
                  )}
                </Fade>
              </SNotificationGroup>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
      <AppFooter>
        <Suspense fallback={loading}>
          <Footer />
        </Suspense>
      </AppFooter>
    </div>
  )
}

export default Main
