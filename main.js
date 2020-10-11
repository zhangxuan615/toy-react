import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {

    render() {
        return <div>
            <h1>aaaa xx</h1>
            {this.children}
        </div>;
    }
}


const a = <MyComponent id='a' class='c'>
    aaaa
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>;

render(a, document.body);