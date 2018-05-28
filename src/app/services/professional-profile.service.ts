import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfessionalProfileService {

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

    getHobbies(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/profile/${id}/hobbies`);
    }
}