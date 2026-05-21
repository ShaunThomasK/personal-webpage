class Typewriter {
    constructor(DOM, config) 
    {
        this.el = DOM;
        this.strings = config['strings'];
        this.typingSpeed = config['typingSpeed'];
        this.eraseSpeed = config['eraseSpeed'];
        this.pauseDuration = config['pauseDuration'];
        this.currentStringIndex = 0;
        this.currentCharIndex = 0;
        this.state = "typing";
    }
    type() 
    {
        const s = this.strings[this.currentStringIndex];
        const l = s.length;
        if (this.currentCharIndex < l)
        {
            setTimeout(() => {
                this.el.textContent += s[this.currentCharIndex];
                this.currentCharIndex += 1;
                this.type();
            }, this.typingSpeed);
        }
        else
        {
            this.state = "pausing";
            this.start();
        }
    }
    erase() 
    {
        if (this.el.textContent.length > 0)
        {
            setTimeout(() => {
                this.el.textContent = this.el.textContent.slice(0, -1);
                this.erase();
            }, this.eraseSpeed);
        }
        else
        {
            this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
            this.currentCharIndex = 0;
            this.state = "typing";
            this.start();
        }
    }
    start()
    {
        if (this.state === "typing")
        {
            this.type();
        }
        else if (this.state === "pausing")
        {
            setTimeout(() => {
                this.state = "erasing";
                this.erase();
            }, this.pauseDuration);
        }
        else if (this.state === "erasing")
        {
            this.erase();
        }
    }
}