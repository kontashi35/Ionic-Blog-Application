# Ionic-Blog-Application

How to run ionic application.

1.npm install   
2.Install ionic and angular cli.   
3.Ionic Serve.   
4.Open localhost:3200   


# Run Demo application   
Download apk and test   
Url   
Base=> https://bloappapi.herokuapp.com/api/   
1. Add new blog      
https://bloappapi.herokuapp.com/api/blog/save   
Method POST   
Body   
`{
	"title":"Sazu",
	"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
	"url":"https://oi217.photobucket.com/albums/cc312/mastersig/Avitars/For%20Me/C_D_A.png"
}`   
2. Delete blog   

https://bloappapi.herokuapp.com/api/blog/delete/33   
Method DELETE   

3. Update blog   

https://bloappapi.herokuapp.com/api/blog/update/33   
Method PUT   
Body   
`{
	"id":33,
	"title":"update",
	"description":"you updated",
	"url":"www.acac.com"
}`   

4.Get blog   

https://bloappapi.herokuapp.com/api/blog/get
Method GET   


