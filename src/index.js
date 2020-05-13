var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Test' + new Date().toLocaleString(),
    },
});


var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    },
});


var app4 = new Vue({
    el: '#app-4',
    data: {
        list: [
            { text: 'Angular' },
            { text: 'Vue' },
            { text: 'React' },
        ],
    },
});


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
    },
});


var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!',
    },
});


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        list: [
            { id: 1, text: 'Angular' },
            { id: 2, text: 'Vue' },
            { id: 3, text: 'React' },
        ],
    },
});


var data = { a: 1 };
var vm = new Vue({
    data: data
});
console.log(vm.a === data.a);
vm.a = 2;
console.log(data.a);
data.a = 3;
console.log(vm.a);
vm.b = 'hi';
console.log(data.b);


var obj = {
    foo: 'bar',
};
Object.freeze(obj);
var app8 = new Vue({
    el: '#app-8',
    data: obj,
});


var data = { a: 1 };
var app9 = new Vue({
    el: '#app-9',
    data: data,
});
console.log(app9.$data === data);
console.log(app9.$el === document.getElementById('app-9'));
app9.$watch('a', function (newValue, oldValue) {
    console.log(newValue);
    console.log(oldValue);
});


new Vue({
    data: {
        a: 1,
    },
    created: function () {
        console.log('a is: ' + this.a);
    },
});


var app10 = new Vue({
    el: '#app-10',
    data: {
        msg: "This is a Message.",
        rawHtml: '<span style="color: red;">Red Text</span>',
        dynamicId: 10,
        isButtonDisabled: true,
        number: 10,
        ok: true,
    },
});


var app11 = new Vue({
    el: '#app-11',
    data: {
        url: "https://google.com",
    },
    methods: {
        doSomething: function() {
            alert(this.url);
        },
    },
});


var app12 = new Vue({
    el: '#app-12',
    data: {
        message: "This is a message.",
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
        computedNow: function () {
            return Date.now();
        },
        // 簡潔
        computedfullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('');
        },
        methodsNow: function () {
            return Date.now();
        },
    },
    // 冗長的
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val;
        },
    },
});


var app13 = new Vue({
    el: '#app-13',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        },
    }
});


var app14 = new Vue({
    el: '#app-14',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing ...';
            this.debouncedGetAnswer();
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark.';
                return;
            }
            this.answer = 'Thinking...';
            axios.get('https://yesno.wtf/api')
                .then((response) => {
                    this.answer = _.capitalize(response.data.answer);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});


var app15 = new Vue({
    el: '#app-15',
    data: {
        isCenter: true,
        hasError: true,
        classObject: {
            center: true,
            'text-danger': true,
        },
    },
    computed: {
        computedClassObject: function () {
            return {
                center: this.isCenter,
                'text-danger': this.hasError,
            };
        },
    },
});


Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>',
});
var app16 = new Vue({
    el: '#app-16',
    data: {
        isActive: true,
    },
});


var app17 = new Vue({
    el: '#app-17',
    data: {
        activeColor: 'red',
        fontSize: 20,
        styleObject: {
            color: 'red',
            fontSize: '20px',
        },
        styleObject2: {
            textAlign: 'center',
        }
    },
});


var app18 = new Vue({
    el: '#app-18',
    data: {
        ok: true,
    },
});


var app19 = new Vue({
    el: '#app-19',
    data: {
        loginType: 'username',
    },
    methods: {
        toggleLoginType: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email';
            } else {
                this.loginType = 'username';
            }
        },
    },
});


var app20 = new Vue({
    el: '#app-20',
    data: {
        ok: false,
    },
});


var app21 = new Vue({
    el: '#app-21',
    data: {
        parentMessage: 'Parent',
        items: [
            { id: 1, message: 'Foo' },
            { id: 2, message: 'Bar' },
        ],
        object: {
            title: 'Study Vue.js',
            author: 'Author',
            publishedAt: (new Date().toLocaleString()),
        },
        numbers: [ 1, 2, 3, 4, 5 ],
        sets: [[ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ]],
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            });
        },
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0;
            });
        }
    }
});


Vue.component('todo-item', {
    template: `
        <li>
            {{ id }}: {{ title }}
            <button @click="$emit('remove')">Remove</button>
        </li>
    `,
    props: [ 'id', 'title' ],
})
var app22 = new Vue({
    el: '#app-22',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Task out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn',
            },
        ],
        nextTodoId: 4,
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText,
            });
            this.newTodoText = '';
        },
    },
});


var app23 = new Vue({
    el: '#app-23',
    data: {
        counter: 0,
        name: 'Vue.js',
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        },
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            if (event) {
                event.preventDefault();
            }
            alert(message);
        },
        doStop: function () {
            alert('Stop');
        },
        doStopPrevent: function () {
            alert('Stop and Prevent');
        },
    },
});


var app24 = new Vue({
    el: '#app-24',
    data: {
        text: '',
        textarea: '',
        checked: false,
        checkedNames: [ 'Jack' ],
        picked: 'One',
        selected: '',
        selectedMultiple: [],
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
        ],
        selectedValue: '',
        toggle: 'yes',
        pick: '',
        picked: 'picked',
        selectedOption: '',
        inputed1: '',
        inputed2: '',
        number1: '',
        number2: '',
        msg1: '',
        msg2: '',
    },
});


Vue.component('button-counter', {
    data: function () {
        return {
            count: 0,
        }
    },
    template: `
        <button @click="count++">You clicked me {{  count }} times.</button>
    `
});
var app25 = new Vue({
    el: '#app-25',
})

Vue.component('blog-post', {
    props: [ 'post' ],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button @click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
});
var app26 = new Vue({
    el: '#app-26',
    data: {
        posts: [
            {
                id: 1,
                title: 'My journye with Vue',
                content: `<p>Hello! My journye with Vue</p>`,
            },
            {
                id: 2,
                title: 'Blogging with Vue',
                content: `<p>Hello! Blogging with Vue</p>`,
            },
            {
                id: 3,
                title: 'Why Vue is so fun',
                content: `<p>Hello! Why Vue is so fun</p>`,
            },
        ],
        postFontSize: 1,
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        },
    },
});


Vue.component('custom-input', {
    props: [ 'value' ],
    template: `
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    `,
});
var app27 = new Vue({
    el: '#app-27',
    data: {
        searchText1: '',
        searchText2: '',
        searchText3: '',
        searchText4: '',
    },
})


Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `,
});
var app28 = new Vue({
    el: '#app-28',
});


Vue.component('tab-home', {
    template: `<div>Home component</div>`,
});
Vue.component('tab-posts', {
    template: `<div>Posts component</div>`,
});
Vue.component('tab-archives', {
    template: `<div>Archives component</div>`,
});
var app29 = new Vue({
    el: '#app-29',
    data: {
        currentTab: 'Home',
        tabs: [
            'Home',
            'Posts',
            'Archives',
        ],
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        },
    },
});


const tabs = [
    {
        name: 'Home',
        component: {
            template: '<div>Home component</div>',
        },
    },
    {
        name: 'Posts',
        component: {
            template: '<div>Posts component</div>',
        },
    },
    {
        name: 'Archives',
        component: {
            template: '<div>Archives component</div>',
        },
    },
];
var app30 = new Vue({
    el: '#app-30',
    data: {
        tabs: tabs,
        currentTab: tabs[0],
    }
});


var ComponentA = {
    template: `
        <div>ComponentA</div>
    `,
};
var ComponentB = {
    template: `
        <div>ComponentB</div>
    `,
};
var app31 = new Vue({
    el: '#app-31',
    components: {
        ComponentA: ComponentA,
        ComponentB, // 省略記法
    },
});


var BlogPost = {
    props: {
        title: {
            type: String,
            default: '',
        },
        likes: {
            type: Number,
            default: 0,
        },
        isPublished:  {
            type: Boolean,
            default: false,
        },
        commentIds:  {
            type: Array,
            default: function () {
                return [];
            },
        },
        author:  {
            type: Object,
            default: function () {
                return null;
            },
        },
    },
    template: `
        <div>
            <p v-if="title">{{ title }}</p>
            <p v-if="likes">{{ likes }}</p>
            <p v-if="isPublished">{{ published }}</p>
            <p v-if="commentIds">{{ commentIdsCommaDelimited }}</p>
            <template v-if="author">
                <p>
                    {{ author.name }} / {{ author.company }}
                </p>
            </template>
        </div>
    `,
    computed: {
        published: function () {
            return this.isPublished ? 'Published' : 'Not Published';
        },
        commentIdsCommaDelimited: function () {
            return this.commentIds ? this.commentIds.join(', ') : null;
        }
    }
}
var app32 = new Vue({
    el: '#app-32',
    components: {
        BlogPost,
    },
    data: {
        post: {
            title: 'Study Vue.js',
            author: {
                name: 'Otk',
                company: 'Vue Company',
            },
            likes: 30,
            isPublished: true,
            commentIds: [ 1, 12, 14 ],
        },
    },
});


var BootstrapDateInput = {
    template: `
        <input type="date" class="form-control">
    `
};
var MyComponent = {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
                :value="value"
                @input="$emit('input', $event.target.value)"
            >
        </label>
    `,
};
var app33 = new Vue({
    el: '#app-33',
    components: {
        BootstrapDateInput,
        MyComponent,
    },
    data: {
        username: '',
    }
});


var BaseCheckbox = {
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        checked: {
            type: Boolean,
            required: true,
        },
    },
    template: `
        <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        >
    `,
}
var app34 = new Vue({
    el: '#app-34',
    components: {
        BaseCheckbox,
    },
    data: {
        lovingVue: false,
    },
});


var BaseInput = {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    computed: {
        inputListeners: function () {
            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event.target.value);
                },
            }
        }
    },
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on="inputListeners"
            >
        </label>
    `,
};
var app35 = new Vue({
    el: '#app-35',
    components: {
        BaseInput,
    },
    methods: {
        onFocus: function () {
            console.log('focus');
        },
    },
});


var TextDocument1 = {
    props: [ 'value' ],
    template: `
        <div>
            <span>Title: </span>
            <input
                :value="value"
                @input="$emit('input', $event.target.value)"
            >
            {{ value }}
        </div>
    `,
};
var TextDocument2 = {
    props: [ 'title' ],
    template: `
        <div>
            <span>Title: </span>
            <input
                :value="title"
                @input="$emit('update:title', $event.target.value)"
            >
            {{ title }}
        </div>
    `,
};
var TextDocument3 = {
    props: [ 'title', 'author' ],
    template: `
        <div>
            <div>
                <span>Title: </span>
                <input
                    :value="title"
                    @input="$emit('update:title', $event.target.value)"
                >
                {{ title }}
            </div>
            <div>
                <span>Author: </span>
                <input
                    :value="author"
                    @input="$emit('update:author', $event.target.value)"
                >
                {{ author }}
            </div>
        </div>
    `,
};
var app36 = new Vue({
    el: '#app-36',
    components: {
        TextDocument1,
        TextDocument2,
        TextDocument3,
    },
    data: {
        doc1: {
            title: '',
        },
        doc2: {
            title: '',
        },
        doc3: {
            title: '',
            author: '',
        }
    },
    methods: {
        changeText1: function () {
            this.doc1.title = 'title';
        },
        changeText2: function () {
            this.doc2.title = 'title';
        },
        changeText3Title: function () {
            this.doc3.title = 'title'
        },
        changeText3Author: function () {
            this.doc3.author = 'author'
        }
    },
});


var BaseLayout = {
    template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `,
};
var app37 = new Vue({
    el: '#app-37',
    components: {
        BaseLayout,
    },
});


var CurrentUser = {
    data: function () {
        return {
            user: {
                firstName: 'Taro',
                lastName: 'Yamada',
            },
        }
    },
    template: `
        <span>
            <slot :user="user">
                {{ user.lastName }}
            </slot>
        </span>
    `,
};
var app38 = new Vue({
    el: '#app-38',
    components: {
        CurrentUser,
    },
});


var TodoList = {
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
    template: `
        <ul>
            <li
                v-for="todo in todos"
                :key="todo.id"
            >
                <slot name="todo" :todo="todo">
                    {{ todo.text }}
                </slot>
            </li>
        </ul>
    `,
};
var app39 = new Vue({
    el: '#app-39',
    components: {
        TodoList,
    },
    data: {
        todos: [
            { id: '1', text: 'Run', isComplete: true },
            { id: '2', text: 'Eat', isComplete: true },
            { id: '3', text: 'Sleep', isComplete: false },
        ],
    },
});


var TabPosts = {
    data: function () {
        return {
            posts: [
                { title: 'Cat Ipsum', body: 'Cat Ipsum Body' },
                { title: 'Hipster Ipsum', body: 'Hipster Ipsum Body' },
                { title: 'cupcake Ipsum', body: 'cupcake Ipsum Body' },
            ],
            currentPost: null,
        }
    },
    template: `
        <div>
            <ul

                style="display: inline-block; border-right: 1px solid gray; margin: 0; padding: 0 5px 0 0; list-style: none;"
            >
                <li
                    v-for="post in posts"
                    :key="post.title"
                    @click="currentPost = post"
                >
                    {{ post.title }}
                </li>
            </ul>
            <div style="display: inline-block; vertical-align: top;">
                <div v-if="currentPost">
                    <h1 style="margin: 0;">{{ currentPost.title }}</h1>
                    <p style="margin: 0;">{{ currentPost.body }}</p>
                </div>
                <strong v-else>
                    Click Post
                </strong>
            </div>
        </div>
    `,
};
var TabArchives = {
    template: `<div>Archives component</div>`,
};
var app40 = new Vue({
    el: '#app-40',
    components: {
        TabPosts,
    },
    data: {
        currentTab: 'Posts',
        tabs: [
            'Posts',
            'Archives',
        ],
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        },
    },
});


var mixin = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc',
        }
    },
    created: function () {
        console.log('mixin hook called');
    },
    methods: {
        hoge: function () {
            console.log('hoge');
        },
        conflicting: function () {
            console.log('from mixin');
        },
    },
};
mixin_vm = new Vue({
    mixins: [ mixin ],
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def',
        }
    },
    created: function () {
        console.log('component hook called');
        console.log(this.$data);
    },
    methods: {
        baz: function () {
            console.log('baz');
        },
        conflicting: function () {
            console.log('from self');
        },
    },
});