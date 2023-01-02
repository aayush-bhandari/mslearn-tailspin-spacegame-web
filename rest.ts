export class RestCalls{
    async get(url: string): Promise<Array<any>> {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic hdybzzfsumccvtyszcmw2pfcifz5fa5t4mlmimp672qdbdw2nera"
          }
        });
    
        if (!res.ok) {
          throw new Error(res.statusText);
        }
    
        const json = await res.json();
        if (json.value) {
          return json.value;
        } else {
          return json;
        }
      }
      

    async run(){
        this.getBuildTimeline();
    }

    async getBuildTimeline(
        isRetry: boolean = false
    ){
        try {
            const response =
             await this.get("https://dev.azure.com/domoreexp/Teamspace/_apis/build/builds/17612175?api-version=5.1");
        
            response.map(async record=>{
                if(this.isMWOrRWC(record.name)){
                    const id = record.id;
                }
            })
            } catch (error) {
            if (isRetry) {
                throw error;
            } else {
                return await this.getBuildTimeline(true);
            }
            }
    }

    isMWOrRWC(name:string){
        if(name == "Build Multi-Window" || name== "Build React Web Client")
            return true;
        return false;
    }
        
}