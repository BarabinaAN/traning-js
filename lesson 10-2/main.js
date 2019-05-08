class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    creatNewItem(text = 'Exsample text') {
        let item = document.createElement('div');

        item.textContent = `${text}`; 
        document.body.appendChild(item); 
        item.style.cssText = `height: ${this.height};\
                            width: ${this.width};\
                            background: ${this.bg};\
                            font-size: ${this.fontSize};\
                            text-align: ${this.textAlign};`
    }
}

const block = new Options('200px', '500px', '#ccc', '18px', 'center');
block.creatNewItem('You can pass any argument to the function as a string \
                    and see the changes in the browser. But if you forgot, \
                    the default value is displayed');