import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = 'http://localhost:3000/profiles'

  constructor(private http:HttpClient) { }

  buscarTodos():Observable<Profile[]> {
    return this.http.get<Profile[]>(this.api);
  }

  cadastrar(profile: Profile) {
    return this.http.post<Profile>(this.api, profile);
  }

  atualizar(updatedProfile:Profile):Observable<Profile>{
    return this.http.put<Profile>(this.api + `/${updatedProfile.id}`,updatedProfile);
  }

  deletar(profileId:string):Observable<void>{
    return this.http.delete<void>(this.api + `/${profileId}`);
  }

  buscarPorId(profileId:string):Observable<Profile>{
    return this.http.get<Profile>(this.api+`/${profileId}`)
  }
}
