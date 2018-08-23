var express = require("express");
var router  = express.Router({mergeParams: true});

var Image = require("../models/image");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find image by id
    console.log(req.params.id);
    Image.findById(req.params.id, function(err, image){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {image: image});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup image using ID
   Image.findById(req.params.id, function(err, image){
       if(err){
           console.log(err);
           res.redirect("/images");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               
               //issue here!!
               Image.findOneAndUpdate(
                       {_id:req.params.id },
                       {$push:{comments:comment._id}
                       }).then(function(){
                         console.log("updated post");
                      });
               
               
               //image.comments.push(comment);
               //image.save();
               
               
               
               console.log(comment);
               req.flash('success', 'Created a comment!');
               res.redirect('/images/' + image._id);
           }
        });
       }
   });
});

router.get("/:commentId/edit", middleware.isLoggedIn, function(req, res){
    // find image by id
    Comment.findById(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
             res.render("comments/edit", {image_id: req.params.id, comment: comment});
        }
    })
});

router.put("/:commentId", function(req, res){
   Comment.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
       if(err){
          console.log(err);
           res.render("edit");
       } else {
           res.redirect("/images/" + req.params.id);
       }
   }); 
});

router.delete("/:commentId",middleware.checkUserComment, function(req, res){
    Comment.findByIdAndRemove(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
            Image.findByIdAndUpdate(req.params.id, {
              $pull: {
                comments: comment.id
              }
            }, function(err) {
              if(err){ 
                console.log(err)
              } else {
                req.flash('error', 'Comment deleted!');
                res.redirect("/images/" + req.params.id);
              }
            });
        }
    });
});

module.exports = router;