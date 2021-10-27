import Backbone from 'backbone';
import { View, Application } from 'backbone.marionette';
import _ from 'underscore';

const MyModel = Backbone.Model.extend();

const MyView = View.extend({
    template: _.template(`<h1><%= title %><h1>`)
});

const App = Application.extend({
    region: '#main-region',

    onBeforeStart(app, options) {
        this.model = new MyModel(options.data);
    },

    onStart(app, options) {
        this.showView(new MyView({
            model: this.model
        }));
        Backbone.history.start();
    }
});

const app = new App();

app.start({
    data: {
        title: 'Hello, world!'
    }
});