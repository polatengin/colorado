"use client";

import 'azure-maps-control/dist/atlas.min.css'

import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control';

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    clientId: '',
    subscriptionKey: '',
  },
}

export default function Maps() {
  return (
    <AzureMapsProvider>
      <AzureMap options={option} styles={{minWidth: "100%", minHeight: "600px"}} />
    </AzureMapsProvider>
  )
}
