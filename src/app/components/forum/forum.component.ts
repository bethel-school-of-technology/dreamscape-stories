import { Component, OnInit } from '@angular/core';

import { dream } from '../../model/dream';
import { dreamsService } from '../../services/dream.service';

@Component({
  selector: 'app-dreams',
  templateUrl: './forum.component.html',
  providers: [dreamsService],
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  dreams: dream[];
  editdream: dream; // the dream currently being edited

  constructor(private dreamsService: dreamsService) {}

  ngOnInit() {
    this.getdreams();
  }

  getdreams(): void {
    this.dreamsService.getdreams()
      .subscribe(dreams => (this.dreams = dreams));
  }

  add(content: string): void {
    this.editdream = undefined;
    content = content.trim();
    if (!content) {
      return;
    }

    // The server will generate the id for this new dream
    const newdream: dream = { content } as dream;
    this.dreamsService
      .adddream(newdream)
      .subscribe(dream => this.dreams.push(dream));
  }

  delete(dream: dream): void {
    this.dreams = this.dreams.filter(p => p !== dream);
    this.dreamsService
      .deletedream(dream.id)
      .subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.dreamsService.deletedream(dream.id);
    */
  }

  edit(dream: dream) {
    this.editdream = dream;
  }

  search(searchTerm: string) {
    this.editdream = undefined;
    if (searchTerm) {
      this.dreamsService
        .searchdreams(searchTerm)
        .subscribe(dreams => (this.dreams = dreams));
    }
  }

  update(dream: dream) {
    if (this.editdream) {
      this.dreamsService
        .updatedream(this.editdream)
        .subscribe(dream => {
        // replace the dream in the dreams list with update from server
        const ix = dream ? this.dreams.findIndex(p => p.id === dream.id) : -1;
        if (ix > -1) {
          this.dreams[ix] = dream;
        }
      });
      this.editdream = dream;
    }
  }
}