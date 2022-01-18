var template = document.createElement('template');
template.innerHTML = `
<style>
#counter {
    display: flex;
    padding: 5px;
    background-color: #DAD;
}

#counter > button {
    background-color: #bed;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 36px;
}

#counter > div {
flex: 1;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
}

#bar {
    width: 0px;
    height: 10px;
    background-color: #bad;
    transition: width 0.2s;
}

</style>
<div id= 'counter'>
    <button>-</button>
    <div>1</div>
    <button>+</button>
</div>
<div id='bar'></div>
`;

class TheCounter extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("the-counter", TheCounter);