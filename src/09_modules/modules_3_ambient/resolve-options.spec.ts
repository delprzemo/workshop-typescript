// import { expect } from 'chai';

// // https://github.com/gulpjs/resolve-options
// import createResolver = require('resolve-options');


// describe('Resolve options', () => {
    
//     // Advanced
//     it('Run with one key', () => {
//         var config = {
//           cwd: {
//             type: 'string',
//             default: process.cwd
//           },
//           sourcemaps: {
//             type: 'boolean',
//             default: false
//           },
//           since: {
//             type: ['date', 'number']
//           },
//           read: {
//             type: 'boolean'
//           }
//         };
        
//         var options = {
//           sourcemaps: true,
//           since: Date.now(),
//           read: function() {
//             return true;
//           }
//         };
        
//         var resolver = createResolver(config, options);
        
//         var cwd = resolver.resolve('cwd');
//         // cwd === process.cwd()
        
//         var sourcemaps = resolver.resolve('sourcemaps');
//         // sourcemaps === true
        
//         var read = resolver.resolve('read');

//         expect(cwd).to.equal(process.cwd());
//         expect(sourcemaps).to.equal(true);
//         expect(read).to.equal(true);
//     });

// });