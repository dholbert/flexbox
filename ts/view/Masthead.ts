module flexbox {

    export module view {

        export class Masthead {

            $el:any;
            model:flexbox.view.FlexContainer;
            monitor:any;

            constructor(model:flexbox.view.FlexContainer) {

                var self = this;

                this.$el = $('.masthead');
                this.model = model;

                this.monitor = model.items.subscribe(function(items){
                    if (items.length === 0) {
                        self.$el.fadeIn();
                    } else {
                        self.$el.hide();
                    }
                });

                //check for local storage
               var confirm = localStorage.getItem('items');

                if (confirm === "0") {
                    this.$el.fadeIn();
                }


                //coming on small screen for first time


                //resizing the page



                resetContent();
                setResizeListener();

                function resetContent(content?:any){

                        var $contentWrap = $('.mh-cond-content');
                        var wHeight = $(window).innerWidth();
                        var newContent = '<p class="mh-warning">User beware! This layout is usable on small screens, but not nearly as useful. I\'d recommend checking back when you\'re on a larger device :) </p>'
                        var oldContent = content ? content : $contentWrap.html();

                        if (wHeight > 730) {
                            console.log('door number 1');
                            $contentWrap.html(oldContent);
                        }

                        if (wHeight < 730) {
                            console.log('door number 2');
                                $contentWrap.html(newContent);
                        }

                }

                function setResizeListener() {
                    var content = $('.mh-cond-content').html();
                    $(window).resize(function(){
                        resetContent(content);
                    });
                }
                

            }//end constructor




        }

    }

}
