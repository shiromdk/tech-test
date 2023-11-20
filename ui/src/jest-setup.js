

import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import 'isomorphic-fetch'
require('jest-fetch-mock').enableMocks()

Object.assign(global, { TextDecoder, TextEncoder });