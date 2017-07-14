import { Referral } from './referral';

export class ReferralGroup {
	caption: string = '';
  referrals: Referral[] = [];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	getReferralByAuthor(author: string): Referral {
    for (var next of this.referrals) {
      if (next.author === author) {
        return next;
      }
    }
    return undefined;
	}

	onlyShowReferralByAuthor(author: string) {
    for (var next of this.referrals) {
      if (next.author === author) {
        next.collapseClass = "panel-collapse in"
      } else {
        next.collapseClass = "panel-collapse collapse"
      }
    }
	}

	onlyShowReferral(referral: Referral) {
	  if (referral.collapseClass === "panel-collapse collapse") {
      for (var next of this.referrals) {
        if (next === referral) {
          next.collapseClass = "panel-collapse in"
        } else {
         next.collapseClass = "panel-collapse collapse"
        }
      }
	  } else {
	    referral.collapseClass = "panel-collapse collapse";
	  }
	}

}

