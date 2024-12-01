import "@testing-library/jest-dom";
// nanti berhubungan dengan react-router
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
