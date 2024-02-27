import { A } from '@solidjs/router';
import { JSX } from 'solid-js';

import { Menu } from '~/feature/auth';
import { Cart } from '~/feature/shop';

import { Search } from '~/feature/search';
import logo from '~/images/logo.svg';
import { host } from './nav.module.css'

export function Nav(props: JSX.HTMLAttributes<HTMLElement>) {
    return <nav {...props} class={`${host} ${props.class ?? ''}`}>
        <div>
            <header>
                <A href="/">
                    <img width="40" alt="SolidStart Logo" src={logo} />
                    <span>SolidStart</span>
                </A>
            </header>

            <main>{props.children}</main>

            <aside>
                <Search />
                <Cart />
                <Menu />
            </aside>
        </div>
    </nav>
}