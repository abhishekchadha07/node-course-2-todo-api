const expect=require('expect');
const request=require('supertest')

const {app}=require('./../server');
const {Todo}=require('./../models/todo');
const{ObjectID}=require('mongodb')
const todos=[{
  _id:new ObjectID(),
  text:'First test Todo'
},{
  _id:new ObjectID(),
  text:'Sexond test todo',
  completed:true,
  completedAt:55
}];
//Post
// beforeEach((done)=>{
// Todo.remove({}).then(()=>{
//   done()
// })
// });
//Get
beforeEach((done)=>{
Todo.remove({}).then(()=>{
  return  Todo.insertMany(todos);
}).then(()=>done());
});
describe('Post/todos',()=>{
  it('should create a new todo',(done)=>{
    var text='Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text + '');
    })
    .end((err,res)=>{
      if(err)
      {
      return  done(err);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done()
      }).catch((e)=>{
        done(e);
      })
    })
  })

  it('should not create todo with invalid body data',(done)=>{
    request(app)
    .post('/todos')
    .send()
    .expect(400)

    .end((err,res)=>{
      if(err){
        return done(err)
      }
      Todo.find().then((todos)=>{
expect(todos.length).toBe(2);
done();
      }).catch((e)=>{
        done(e);
      })
    })
  })
})

describe('GET /todos',()=>{
  it('should get all todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  })
})


describe('GET /todos / :id',()=>{
  it('should return todo doc',(done)=>{
request(app)
.get(`/todos/${todos[0]._id.toHexString()}`)
.expect(200)
.expect((res)=>{
  expect(res.body.todo.text).toBe(todos[0].text);
})
.end(done);
  })

  it('should return 404 if todo not found',(done)=>{
    request(app)
    .get(`/todos/${new ObjectID().toHexString()}`)
    .expect(404)
    // .expect((res)=>{
    //   expect(res.body.todo.length).toBe(1);
    // })
    .end(done);
  })


  it('should return 404 if non object ids',(done)=>{
    request(app)
    .get(`/todos/59beb7deeb66d24d5cef6322`)
    .expect(404)
    // .expect((res)=>{
    //   expect(res.body.todo.length).toBe(1);
    // })
    .end(done);
  })
})


describe('Delete / todos /:id',()=>{
  it('should remove a todo',(done)=>{
var hexid=todos[1]._id.toHexString();
request(app)
.delete(`/todos/${hexid}`)
.expect(200)
.expect((res)=>{
  expect(res.body.todo._id).toBe(hexid)
})
.end((err,res)=>{
  if(err){
    return done(err);
  }

  Todo.findById(hexid).then((todo)=>{
    expect(todo).toNotExist();
    done();
  }).catch((e)=>done(e));
})
  })
it('should return 404 if todo not found',(done)=>{
 request(app)
  .delete(`/todos/${new ObjectID().toHexString()}`)
  .expect(400)
  // .expect((res)=>{
  //   expect(res.body.todo.length).toBe(1);
  // })
  .end(done);
})
//
it('should return 404 if object id is invalid',(done)=>{
  request(app)
  .get(`/todos/qq`)
  .expect(404)
  // .expect((res)=>{
  //   expect(res.body.todo.length).toBe(1);
  // })
  .end(done);
})
})

describe('Patch /todos/ :id',()=>{
  it('should update the todo',(done)=>{
var hexid=todos[0]._id.toHexString();
var text='This should be new text'
request(app)
.patch(`/todos/${hexid}`)
.send({
  completed:true,
  text
})
.expect(200)
.expect((res)=>{
  expect(res.body.todo.text).toBe(text);
  expect(res.body.todo.completed).toBe(true);
  expect(res.body.todo.completedAt).toBeA('number');
})
.end(done);
  });
  it('should clear completedAt when todo id not completed',(done)=>{
    var hexid=todos[1]._id.toHexString();
    var text='This should be new text !!!'
    request(app)
    .patch(`/todos/${hexid}`)
    .send({
      completed:false,
      text
    })
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(text);
      expect(res.body.todo.completed).toBe(false);
      expect(res.body.todo.completedAt).toNotExist();
    })
    .end(done);
  })
})
