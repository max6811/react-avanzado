import React from "react";
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(<div>Hello react dev!</div>)