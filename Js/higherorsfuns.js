export default function() {
    var posts = []

    for(var num=1;num<=10;num++){
        for(var id=1;id<=10;id++){
            const object = {}
            object['userId']=num;
            object['id']=id;
            object['favNUm']= Math.ceil(Math.random()*100);
            posts.push(object);

        }
        
    }
    return posts;
}

// console.log(posts);