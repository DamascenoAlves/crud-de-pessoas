import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  constructor(private profileService: ProfileService,private router: Router) { }

  @Input() profiles: Profile[] = [];

  ngOnInit() {
    this.profileService.buscarTodos().subscribe((result)=>{
      this.profiles = result;
    });
  }

  deleteProfile(profileId:string){
    console.log("vambora"+profileId)
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter isto futuramente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Cancelar."
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.deletar(profileId).subscribe();
        Swal.fire({
          title: "Deletado!",
          text: "Pessoa foi deletada de nossa base de dados.",
          icon: "success"
        });
        this.ngOnInit();
      }
    });
  }
}
