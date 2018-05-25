import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfessionalProfileService {

    private resumesMap: any = {1: {
        summary: 'I HAVE LIVED AND WORKED IN FIVE COUNTRIES PLAYING DIFFERENT MANAGEMENT ROLES THAT HELPED ME TO DEVELOP A SUBSTANTIAL VARIETY OF SOFT AND HARD SKILLS THAT MAKE ME AN EXCELLENT FIT FOR ANY ORGANIZATION WILLING TO IMPROVE AND TRANSFORM THEIR CURRENT WAY OF WORK.', 
        professionalPic: 'ismaelcorporate020.jpg', 
        professionalPicXs: 'ismaelcorporate031100x628.jpg', 
        educationPic: 'probrand3.jpg', 
        educationPicXs: 'probrand3-u556-fr2.jpg', 
    }};

    private profilesMap: any = {1: {
        id: 1, 
        firstName: 'Ismael', 
        lastName: 'Abrego', 
        description: 'A TRANSLATOR OF HIGH-LEVEL STRATEGIC INTENTS TO OPERATIONAL REALITY', 
        legend: 'TRANSFORMATION & CHANGE MANAGER, STRATEGIC CONSULTANT, BUSINESS OPTIMIZATION', 
        summaryPicXs: 'probrand1b1100x628.jpg', 
        summaryPic: 'probrand1b.jpg', 
        resumeId: 1
    }, 2: {
        id: 2, 
        firstName: 'Laura', 
        lastName: 'Rose', 
        description: 'I CAN SELL SAND IN THE DESERT AND WATER IN THE OCEAN', 
        legend: null, 
        summaryPic: 'covers03.jpg', 
        summaryPicXs: 'covers031100x628.jpg', 
        resumeId: 2
    }};

    private experience: any[] = [{
        title: 'Change Manager', 
        company: 'NXP Semiconductors', 
        fromDate: new Date('2018-01-02'), 
        toDate: new Date('2015-01-02'), 
        city: 'Austin', 
        state: 'TX', 
        country: 'USA', 
        actual: true, 
        activities: [{
            description: 'Design and implement strategies to manage adoption of new ways of work resulting from mergers and acquisition programs.  Working with Integration Management Office, Program Management Office, and Key Business Stakeholders, I define the best approach to address the business transformation needs balancing hard and soft objectives.'
        }], 
        resumeId: 1
    }, {
        title: 'CIO\'s Operations Manager', 
        company: 'Freescale Semiconductors', 
        fromDate: new Date('2014-01-02'), 
        toDate: new Date('2015-01-02'), 
        city: 'Austin', 
        state: 'TX', 
        country: 'USA', 
        actual: false, 
        activities: [{
            description: 'Enabling transformation of IT Organization through identification and execution of strategic opportunities via process indicators, activity value assessments, benchmarks, cultural awareness, and communication strategies.'
        }], 
        resumeId: 1
    }, {
        title: 'IT Manufacturing Manager', 
        company: 'Freescale Semiconductors', 
        fromDate: new Date('2010-01-02'), 
        toDate: new Date('2014-01-02'), 
        city: 'Guadalajara', 
        state: 'Jalisco', 
        country: 'Mexico', 
        actual: false, 
        activities: [{
            description: 'Management of the Computer Integrated Manufacturing group responsible for automation and process control for the Semiconductors Manufacturing (Equipment Integration, Automated SPC, Run by Run Smart control)'
        }], 
        resumeId: 1
    }, {
        title: 'Manager - Project Management Office', 
        company: 'CEMEX', 
        fromDate: new Date('2008-01-02'), 
        toDate: new Date('2010-01-02'), 
        city: 'Monterrey', 
        state: 'Nuevo Leon', 
        country: 'Mexico', 
        actual: false, 
        activities: [{
            description: 'Manage the Corporate Program Management Office, responsible to establish Project Management Methodologies, Tools and resources assigned as Project Managers across the globe.'
        }], 
        resumeId: 1
    }];

    private education: any = [{
        id: 1, 
        gradeName: 'Master in Computer Science', 
        institutionName: 'Universidad Autonoma de Guadalajara', 
        gradeDate: new Date('2008-01-02'), 
        resumeId: 1
    }, {
        id: 2, 
        gradeName: 'BACHELOR IN COMPUTER ENGINEERING', 
        institutionName: 'UNIVERSIDAD DEL VALLE DE ATEMAJAC', 
        gradeDate: new Date('2008-01-02'), 
        resumeId: 1
    }, {
        id: 3, 
        gradeName: 'PROJECT MANAGEMENT PROFESSIONAL', 
        institutionName: 'PROJECT MANAGEMENT INSTITUTE', 
        gradeDate: new Date('2008-01-02'), 
        resumeId: 1
    }, {
        id: 4, 
        gradeName: 'ITIL FOUNDATION CERTIFICATION', 
        institutionName: 'AXELOS', 
        gradeDate: new Date('2008-01-02'), 
        resumeId: 1
    }];

    private hobbies = [{
        id: 1, 
        pic: 'ismaelmoto051.jpg', 
        summary: 'I don\'t ride because I am a good rider, I ride because the challenge to leave my fears behind me.', 
        description: 'A good friend of mine, Oliver Aponte, introduce me to motorcycles and taught me to ride.  He didn\'t care that I dropped his bike to the ground several times, he kept calm and patient doing his best to help me find my way around something that by the time I considered impossible to achieve, "That it\'s not for me,  I\'m not good enough for that." Those were my thoughts, which I know were only fueled by the fear of doing something new and exciting. <br/>Anna my girlfriend by the time gave the best present ever, a voucher to attend a motorcycle class, and it was the beginning of a passion for everything about motorcycling, the two wheels machines in all its styles, but my favorites are the naked street bikes and cafe racer style. The admiration for fantastic professional riders like Valentino Rossi and Marc Marquez, and the creative builders like Krystal Hess or Keanu Reeves.',
        displayOrder: 1
    }, {
        id: 2, 
        pic: 'business-thinker.jpg', 
        summary: 'The only path to becoming an entrepreneur is starting a business, any business.', 
        description: 'Some friends call me a dreams breaker, and the main reason for it, is because when they come to me, all excited about an idea, I firmly insist on leaving the thinking behind and start trying it right away, even if is not "perfect" yet. Or because if they ask for feedback I\'ll be acting as an investor and they have to convince me to put my money on it.  And in most cases,  I have found that they have no clarity on how to translate that idea into a real business, or because they enjoy the process of dreaming about it, but are terrified about the process of making it a reality.   In my experience, the only way to become "something" is to start acting like that.  And yes, there will be a lot of failures,  learnings, disappointments, economic loses and all those experiences that are not shared, unless that someone is already super successful and then he or she can share all the history behind the current success.<br/> I have personally started some business; some were successful for a time, some a total failure and many are in the making.  But the most important thing to me is that I keep trying and learning.<br/> Some of my favorite, podcast about entrepreneurship and business are:  "How I build this" from NPR,  "Business Wars" from Wondery, and "The Tim Ferris Show" of course from Tim Ferris.', 
        displayOrder: 3
    }, {
        id: 3, 
        pic: 'think-design.jpg', 
        summary: 'I am not an artist, I\'m just a visual thinker', 
        description: 'I always feel a strong inclination to visual arts; I admire the power of graphics that can trigger emotions and capture viewers attention.  More by circumstances than planned, during my career, I faced continuously the need to compress lots of complex or technical data into pieces of meaningful information for senior executives that their interest was about the business value and strategic impact for the company.  Also, several times that I had the opportunity of working closely with senior consultants from,  Boston Consulting Group,  Deloitte, and Accenture,  That experience is like an MBA in practice. So summarization and visualization are skills that I developed through the years, and that have become of great help during my roles while developing presentations for "C" and "VP." levels.', 
        displayOrder: 2
    }]

    constructor(private http: HttpClient){}

    getSummary(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/profile/${id}/summary`);
    }

    getProfessional(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/profile/${id}/professional`);
    }

    getEducation(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/profile/${id}/education`);
    }
    
    getResumeInfo(id: number): Observable<any> {
        let resume: any = {};

        return Observable.create(subscriber => {
            resume = this.resumesMap[id];

            resume.professionalExperience = this.experience;
            resume.education = this.education;

            subscriber.next(resume);
        });
    }

    getHobbies(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/profile/${id}/hobbies`);
    }
}