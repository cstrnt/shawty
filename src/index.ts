class Shawty {
    private shortcuts: Map<string, { action: (e: KeyboardEvent) => void, description?: string }>;
    
  
    constructor(){
      this.shortcuts = new Map();
      window.addEventListener("keydown", this.listener)
    }
  
    register(key: string, action: (e: KeyboardEvent) => void, description?: string){
      this.shortcuts.set(key, {action, description })
    
    }
  
    print(){
      return Array.from(this.shortcuts.entries()).map(([key, { description }]) => `${key}: ${description}`).join()
    }
  
    unregister(){
      window.removeEventListener("keydown", this.listener)
    }

     private listener = (e: KeyboardEvent) => {
      const shortcut = this.shortcuts.get(e.key.toLowerCase());
      if(!shortcut) return;
      shortcut.action(e)
    }
  
  }
  
  const s = new Shawty();
  
  s.register("a", () => console.log("test"), "Xd")
  s.register("b", (e) => console.log(e.key))
  s.register("p", (e) => {
    document.body.innerHTML = s.print();
  })
