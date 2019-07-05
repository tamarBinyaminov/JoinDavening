// public bool Success { get; set; }
// public string Message { get; set; }
// public T Value { get; set; }
export class WebResult{
    constructor(public Success:boolean,
        public Message:string,
        public Value:any
        ){}
}