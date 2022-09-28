import React from 'react';
import { createRoot } from 'react-dom/client';

const element = document.createElement('div');
document.body.append(element);
element.id = 'sandbox';

const root = createRoot(element);
root.render(
    <React.StrictMode>
        <h1>Hello, Welcome to Sandbox.</h1>
        <Sandbox />
    </React.StrictMode>
);

// Sandbox
// import _ from 'lodash';
import { debounce } from 'lodash';
function Sandbox() {
    return (
        <>
            <button
                onClick={debounce(() => {
                    console.log('Trailing');
                }, 1000)}
            >
                Trailing Debounce
            </button>
            <button
                onClick={debounce(
                    () => {
                        console.log('Leading');
                    },
                    1000,
                    {
                        leading: true,
                        trailing: false,
                    }
                )}
            >
                Leading Debounce
            </button>
            <button
                onClick={debounce(
                    () => {
                        console.log('Leading + Trailing');
                    },
                    1000,
                    {
                        leading: true,
                        trailing: true,
                    }
                )}
            >
                Leading + Trailing Debounce
            </button>
        </>
    );
}
