# AngularJS meetup teachr

Demo app for the talk "noBackend: rapid prototyping and beyond" during the AngularJS Berlin Meetup of [2014.02.12](http://www.meetup.com/AngularJS-Meetup-Berlin/events/146829152/).  
![AngularJS Berlin meetup](http://berlinjs.org/img/AngularJS-Berlin.png)  
This app uses [deployd](http://deployd.com/) as backend to store the data and to have some basic authentication.  
The frontend is build with angularJS (O RLY?).  
This tiny app allows a teacher to manage a class and the students.
![angularMeetupTeachr](https://raw2.github.com/NicolasRitouet/nicolasritouet.github.io/master/images/angularMeetupTeachrScreenshot.png)


## Requirements
- a mongoDB server (set the host, port, dbname and credentials in Gruntfile.js)
or (preferably)
- [deployd binaries installed](http://deployd.com/download.html)


## Install

### Development without deployd binaries
Launch deployd

```bash
$ grunt server
```

### Development with deployd binaries (preferably)
```bash
$ dpd -o
```
