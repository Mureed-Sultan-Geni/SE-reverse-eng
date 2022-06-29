import getComp from 'setjs/template/component.js';
import data from '../data';

export default {
  templates: ['site/home'],
  comp: function() {
    var pageComp = getComp('site/home',{data});
    return pageComp;
  }
};
