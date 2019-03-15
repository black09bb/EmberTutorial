import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember tutorial', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/')
    assert.equal(currentURL(), '/rentals', 'should automatically redirect')
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/')
    await click('.menu-about')
    assert.equal(currentURL(), '/about', 'should navigate to about page')
  });

  test('should link to contact information', async function(assert) {
    await visit('/')
    await click('.menu-contact')
    assert.equal(currentURL(), '/contact', 'should navigate to contact page')
  });
  
  test('should list available rentals.', async function (assert) {
  });

  test('should filter the list of rentals by city.', async function (assert) {
  });

  test('should show details for a selected rental', async function (assert) {
  });

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});